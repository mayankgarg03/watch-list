import mongoose from "mongoose";

import { checkUserExist } from "../services/watch-list.services";
import { UserModel } from "../models";
import { IWatchList } from "../models/user.models";

const addToWatchlist = async (userId: string, contentId: string): Promise<any> => {
  try {
    const user = await checkUserExist(userId);

    const isAlreadyInList = user.watchList.some((item: any) =>
      item.contentId.equals(contentId)
    );
    if (isAlreadyInList) {
      throw {
        message: "Content is already in the watch list",
      };
    }

    const watchListItem: IWatchList = {
      contentId: new mongoose.Types.ObjectId(contentId),
      addedOn: new Date(),
    };

    user.watchList.push(watchListItem);
    await user.save();
    return {
      message: "Content added to watch list",
    };
  } catch (error: any) {
    throw { message: error.message || "Error adding to watch list" };
  }
};

const getWatchlist = async (userId: string, page: number, pageSize: number): Promise<any> => {
  try {
    const skip: number = (page - 1) * pageSize;
    const user = await UserModel.findById(userId)
      .populate({
        path: "watchList.contentId",
        options: { skip, limit: pageSize },
      })
      .exec();
    if (!user) {
      throw { message: "User not found" };
    }
    return { watchList: user.watchList };
  } catch (error: any) {
    throw { message: error.message || "Error retrieving watch list" };
  }
};

const removeFromWatchlist = async (userId: string, contentId: string): Promise<any> => {
  try {
    const user = await checkUserExist(userId);
    const initialLength = user.watchList.length;
    user.watchList = user.watchList.filter(
      (item: any) => !item.contentId.equals(contentId)
    );
    if (user.watchList.length === initialLength) {
      throw { message: "Content not found in the watch list" };
    }

    await user.save();
    return { message: "Content removed from watch list" };
  } catch (error: any) {
    throw { message: error.message || "Error removing from watch list", error };
  }
};

export { addToWatchlist, getWatchlist, removeFromWatchlist };

import { UserModel, ContentModel } from "../models";


const checkUserExist = async (userId: string): Promise<any> => {
    try {
        const user = await UserModel.findById(userId);
        if (!user) {
          throw {
            message: 'User not found',
            statusCode: 404
          }
        }
        return user;
    } catch (e) {
        console.error('Error In checkUserExist');
        throw e;
    }
}

export {
    checkUserExist
};


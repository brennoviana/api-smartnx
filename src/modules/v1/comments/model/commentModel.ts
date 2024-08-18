import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../../../config/database/dbConfig";
import { CommentAttributes } from "../interface/commentInterface";
import { Post } from "../../posts/model/postModel";
import { User } from "../../users/model/userModel";

interface CommentCreationAttributes extends Optional<CommentAttributes, "id"> {}

class Comment extends Model<CommentAttributes, CommentCreationAttributes> {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Post,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: "Comments",
    timestamps: true,
  },
);

Comment.belongsTo(Post, { foreignKey: "postId", as: "post" });
Comment.belongsTo(User, { foreignKey: "userId", as: "user" });

export { Comment };

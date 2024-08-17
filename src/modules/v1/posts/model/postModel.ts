import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../../../../config/database/dbConfig";
import { PostAttributes } from "../interface/postInterface";
import { User } from "../../users/model/userModel";

interface PostCreationAttributes extends Optional<PostAttributes, "id"> {}

class Post extends Model<PostAttributes, PostCreationAttributes> {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
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
    tableName: "Posts",
    timestamps: true,
  },
);

Post.belongsTo(User, { foreignKey: "userId", as: "user" });

export { Post };

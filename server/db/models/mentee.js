'use strict';

const {
  Model, Validator
} = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class Mentee extends Model {
    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    }

    static getCurrentMentorById(id) {
      return Mentee.scope('currentMentee').findByPk(id);
    }

    static async login({ email, password }) {
      const mentee = await Mentee.scope('loginMentee').findOne({
        where: {
          email
        },
      });

      if (mentee && mentee.validatePassword(password)) {
        return await Mentee.scope('currentMentee').findByPk(mentee.id);
      }
    }

    static async signup({
      name, email, password, profileImg, role, about

    }) {
      const hashedPassword = bcrypt.hashSync(password);
      const mentee = await Mentee.create({
        name,
        email,
        hashedPassword,
        profileImg,
        role,
        about,

      });
      return await Mentee.scope('currentMentee').findByPk(mentee.id);
    }

    static async upgrade({
      id,
      name,
      email,
      countryCode,
      phone,
      city,
      state,
      country,
      profileImg,
      goal,
      about,
      occupation,
      skill,
      project,
      mentorId
    }) {
      await Mentee.update(
        {
          name,
          email,
          countryCode,
          phone,
          city,
          state,
          country,
          profileImg,
          goal,
          about,
          occupation,
          skill,
          project,
          mentorId
        },
        { where: { id } }
      );

      return await Mentee.scope('currentMentee').findByPk(id);
    }

    static associate(models) {
      Mentee.belongsTo(models.Mentor, {
        foreignKey: 'mentorId',
      });
      Mentee.hasMany(models.Task, {
        foreignKey: 'menteeId',
      });
    }
  }
  Mentee.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 40],
        isNotEmail(value) {
          if (Validator.isEmail(value)) {
            throw new Error('Cannot be an email.');
          }
        }
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 300],
        isEmail: true,
      },
    },
    countryCode: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 3]
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: [10, 10]
      }
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60],
      },
    },
    classification: {
      type: DataTypes.STRING,
      defaultValue: 'Mentee'
    },
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    profileImg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    goal: DataTypes.STRING,
    skill: DataTypes.STRING,
    about: DataTypes.STRING,
    occupation: DataTypes.STRING,
    project: DataTypes.STRING,
    mentorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mentee',
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentMentee: {
        attributes: {
          exclude: ['hashedPassword'],
        },
      },
      loginMentee: {
        attributes: {},
      },
    },
  });
  return Mentee;
};

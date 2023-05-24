'use strict';

const { Model, Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class Mentor extends Model {
    validatePassword(password) {
      return bcrypt.compareSync(password, this.hashedPassword.toString());
    }

    static getCurrentMentorById(id) {
      return Mentor.scope('currentMentor').findByPk(id);
    }

    static async login({ email, password }) {
      const mentor = await Mentor.scope('loginMentor').findOne({
        where: {
          email
        },
      });
      if (mentor && mentor.validatePassword(password)) {
        return await Mentor.scope('currentMentor').findByPk(mentor.id);
      }
    }

    static async signup({
      name, email, password, profileImg, role, about
    }) {
      const hashedPassword = bcrypt.hashSync(password);
      const mentor = await Mentor.create({
        name,
        email,
        hashedPassword,
        profileImg,
        role,
        about,
      });

      return await Mentor.scope('currentMentor').findByPk(mentor.id);
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
      yrsExp,
      about,
      role,
      expertise,
      company
    }) {
      await Mentor.update({
        name,
        email,
        countryCode,
        phone,
        city,
        state,
        country,
        profileImg,
        yrsExp,
        about,
        role,
        expertise,
        company
      }, { where: { id } });

      return await Mentor.scope('currentMentor').findByPk(id);
    }

    static associate(models) {
      Mentor.hasMany(models.Mentee, {
        foreignKey: 'mentorId'
      });
      Mentor.hasMany(models.Task, {
        foreignKey: 'mentorId',
      });
    }
  }
  Mentor.init({
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
      defaultValue: 'Mentor'
    },
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    profileImg: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    yrsExp: DataTypes.INTEGER,
    expertise: DataTypes.STRING,
    role: DataTypes.STRING,
    about: DataTypes.STRING,
    company: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mentor',
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentMentor: {
        attributes: {
          exclude: ['hashedPassword'],
        },
      },
      loginMentor: {
        attributes: {}
      }
    },
  });
  return Mentor;
};

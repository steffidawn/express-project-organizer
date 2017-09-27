'use strict';
module.exports = (sequelize, DataTypes) => {
  var project_organizer_development = sequelize.define('project_organizer_development', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return project_organizer_development;
};

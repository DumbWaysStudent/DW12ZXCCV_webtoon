'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoon = sequelize.define('webtoon', {
    title: DataTypes.STRING,
    genre_id: DataTypes.INTEGER,
    image: DataTypes.STRING,
    isFavorite: DataTypes.BOOLEAN
  }, {});
  webtoon.associate = function(models) {
    webtoon.belongsTo(models.user,{
      as : 'user',
      foreignKey : 'created_by'
    })
    webtoon.belongsTo(models.genre,{
      as : 'genre',
      foreignKey : 'genre_id'
    })
    webtoon.hasMany(models.episode,{
       foreignKey : 'webtoon_id',
       as : 'episodes',
    })
  };
  return webtoon;
};

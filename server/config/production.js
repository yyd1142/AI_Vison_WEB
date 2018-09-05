module.exports = {
  port: 3000,
  host: '0.0.0.0',
  db: {
    host: '10.8.0.14',
    database: 'face_painting',
    user: 'fp',
    port: 3306,
    password: 'MKO--Team--2018',
    multipleStatements: true
  },
  redis: {
    RDS_PORT: 6379,
    RDS_HOST: '10.8.0.6',
    RDS_PWD: 'MKO--Team--2018'
  },
  imgDomin: 'https://fp-1256261446.picgz.myqcloud.com'
};

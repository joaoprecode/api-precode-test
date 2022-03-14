module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3de1b3e67968ba00e23f979289f9c3d9'),
  },
});

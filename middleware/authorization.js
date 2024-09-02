const Permission = require('../models/Permission');

const checkPermission = async (role, resource, action) => {
  const permission = await Permission.findOne({
    where: {
      role,
      resource,
      action,
      allowed: true
    }
  });

  return !!permission;
};

const authorize = (resource, action) => {
  return async (req, res, next) => {
    const hasPermission = await checkPermission(req.role, resource, action);
    if (hasPermission) {
      next();
    } else {
      return res.status(403).json({ message: 'Acesso negado' });
    }
  };
};

module.exports = authorize;

import HomeRouter from './HomeRoute'

export const routes = app => {
    app.use('/', HomeRouter);
};

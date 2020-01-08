import { RoutesInput } from '../types';


export default({app} : RoutesInput) => {
    app.post('api/test', async (req, res) => {
        return res.send("Test")
    });
}
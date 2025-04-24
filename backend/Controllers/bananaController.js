const db = require('../databaseConfig');

exports.getSeasonalData = async (req, res) => {
    try {
        const results = await db.query(
            `
                SELECT * FROM BANANAS
            `
        )
        console.log(results);
        res.status(200).json(results.rows);
    } catch (err) {
        console.log(err);
        res.sendStatus(500).json(err);
    }
}
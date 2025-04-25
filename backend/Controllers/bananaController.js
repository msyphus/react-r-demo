const db = require('../databaseConfig');

exports.getSeasonalData = async (req, res) => {
    try {
        const categories = await db.query(
            `
                SELECT DISTINCT SEASON FROM BANANAS
            `
        );

        const formattedArr = categories.rows.map(async (row) => {
            const vector = await db.query(
                `
                    SELECT PROPORTION FROM BANANAS
                    WHERE SEASON = '${row.season}'
                `
            );

            const proportions = vector.rows.map(obj => {
                return parseFloat(obj.proportion);
            });

            const group = {
                x: row.season,
                y: proportions
            }

            return group;
        });

        Promise.all(formattedArr)
        .then(finals => {
            res.status(200).json(finals);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
        
    } catch (err) {
        console.log(err);
        res.sendStatus(500).json(err);
    }
}
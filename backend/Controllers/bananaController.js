const db = require('../databaseConfig');

exports.getSeasonalData = async (req, res) => {
    try {
        // const results = await db.query(`
        //     SELECT 
        //         SEASON,
        //         PROPORTION
        //     FROM BANANAS
        // `);

        // res.status(200).json(results.rows);

        //For ApexChart data
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
                name: row.season,
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

exports.getBananaTypes = async (req, res) => {
    try {
        const types = await db.query(`
            SELECT
                BANANA_TYPE,
                PCT_POPULATION
            FROM BANANA_TYPES
        `);
        
        let pcts = [];
        let categories = [];

        types.rows.map(e => {
            pcts.push(parseFloat(e.pct_population));
            categories.push(e.banana_type);
        })

        const result = [
            {
                values: pcts,
                labels: categories,
                type: 'pie'
            }
        ]

        res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
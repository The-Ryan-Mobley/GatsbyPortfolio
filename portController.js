const connection = require('./dbConnect');
module.exports = {
    queryportfolio: (req, res) => {
        const sqlString = `SELECT * FROM projects`;
        connection.query(sqlString, (er, response) =>{
            if(er) throw er;
            response.forEach(i => {
                let techArr = i.technology.split(",");
                i.technology = techArr;
            });
            res.json(response);

        });

    }
}
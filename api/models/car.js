const db = require('../database/connect');
// car_id, make, model, price, year, colour)

class Car {

    constructor({car_id, make, model, price, year, colour }) {
        this.id = car_id;
        this.make = make;
        this.model = model;
        this.price = price;
        this.year = year;
        this.colour = colour;
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM car");
        return response.rows.map(p => new Car(p));
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM car WHERE car_id = $1", [id]);
        if (response.rows.length != 1) {
            throw new Error("Unable to locate car.")
        }
        return new Car(response.rows[0]);
    }

    static async create(data) {
        const { make, model, price, year, colour } = data;
        let response = await db.query("INSERT INTO car (make, model, price, year, colour) VALUES ($1, $2, $3, $4, $5) RETURNING car_id;",
            [make, model, price, year, colour]);
        const newId = response.rows[0].car_id;
        const newPost = await Post.getOneById(newId);
        return newPost;
    }

    async destroy() {
        let response = await db.query("DELETE FROM car WHERE car_id = $1 RETURNING *;", [this.id]);
        return new Car(response.rows[0]);
    }

}

module.exports = Car;
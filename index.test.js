const request = require("supertest");
const app = require("./src/app");

describe("API Endpoints", () => {
  // Users tests
  describe("Users Endpoints", () => {
    it("should create a new user", async () => {
      const res = await request(app).post("/users").send({ name: "John Doe" });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("0.name", "John Doe");
    });

    it("should not create a user without a name", async () => {
      const res = await request(app).post("/users").send({});
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("error");
    });

    it("should update a user", async () => {
      const res = await request(app).put("/users/1").send({ name: "Jane Doe" });
      expect(res.statusCode).toEqual(200);
      expect(res.text).toBe("User updated");
    });

    it("should delete a user", async () => {
      const res = await request(app).delete("/users/1");
      expect(res.statusCode).toEqual(200);
      expect(res.text).toBe("User deleted");
    });
  });

  // Fruits tests
  describe("Fruits Endpoints", () => {
    it("should create a new fruit", async () => {
      const res = await request(app)
        .post("/fruits")
        .send({ name: "Apple", color: "Red" });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("0.name", "Apple");
    });

    it("should not create a fruit without a color", async () => {
      const res = await request(app).post("/fruits").send({ name: "Banana" });
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty("error");
    });

    it("should update a fruit", async () => {
      const res = await request(app)
        .put("/fruits/1")
        .send({ name: "Banana", color: "Yellow" });
      expect(res.statusCode).toEqual(200);
      expect(res.text).toBe("Fruit updated");
    });

    it("should delete a fruit", async () => {
      const res = await request(app).delete("/fruits/1");
      expect(res.statusCode).toEqual(200);
      expect(res.text).toBe("Fruit deleted");
    });
  });
});

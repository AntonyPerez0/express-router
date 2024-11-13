const request = require("supertest");
const app = require("./src/app");

describe("Users API", () => {
  it("should get all users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it("should get a single user", async () => {
    const res = await request(app).get("/users/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id", 1);
  });

  it("should create a new user", async () => {
    const res = await request(app)
      .post("/users")
      .send({ name: "John Doe", age: 30 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("name", "John Doe");
  });

  it("should update a user", async () => {
    const res = await request(app)
      .put("/users/1")
      .send({ name: "Jane Doe", age: 25 });
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("User updated");
  });

  it("should delete a user", async () => {
    const res = await request(app).delete("/users/1");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe("User deleted");
  });
});

describe("Fruits API", () => {
  it("should get all fruits", async () => {
    const res = await request(app).get("/fruits");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it("should get a single fruit", async () => {
    const res = await request(app).get("/fruits/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("id", 1);
  });

  it("should create a new fruit", async () => {
    const res = await request(app)
      .post("/fruits")
      .send({ name: "Apple", color: "Red" });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("name", "Apple");
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

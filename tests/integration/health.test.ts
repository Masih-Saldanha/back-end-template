import supertest from "supertest";

import app from "../../src/config/app.js";

describe("Health integrations tests", () => {
  it("Should return 'OK'", async () => {
    const response = await supertest(app).get("/health/");

    expect(response.text).toBe("OK");
    expect(response.statusCode).toBe(200);
  });
});
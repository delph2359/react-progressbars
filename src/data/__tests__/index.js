let mockResponse;

it("getData", async () => {
  const axiosMock = {
    get: jest.fn(() => Promise.resolve({ data: mockResponse }))
  };
  jest.setMock("axios", axiosMock);

  const getData = require("../api").getData;
  mockResponse = { buttons: [7, 37, -41, -41], bars: [72, 84], limit: 170 };
  const response = await getData("http://fakeurl.com");
  expect(axiosMock.get).toHaveBeenCalledWith(
    expect.stringContaining("http://fakeurl.com")
  );
  expect(response).toEqual({
    buttons: [7, 37, -41, -41],
    bars: [72, 84],
    limit: 170
  });
});

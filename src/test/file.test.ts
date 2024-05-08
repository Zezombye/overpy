import * as assert from "assert";
import { getFilenameFromPath } from "../utils/file.js";

describe("getFilenameFromPath", () => {
  it("should return the filename from a given path", () => {
    const path = "/path/to/file.txt";
    const filename = getFilenameFromPath(path);
    assert.equal(filename, "file.txt");
  });

  it("should return an empty string if the path is empty", () => {
    const path = "";
    const filename = getFilenameFromPath(path);
    assert.equal(filename, "");
  });

  it("should return the filename if the path ends with a slash", () => {
    const path = "/path/to/directory/";
    const filename = getFilenameFromPath(path);
    assert.equal(filename, "directory");
  });

  it("should return the filename if the path contains multiple slashes", () => {
    const path = "/path/to/directory/file.txt";
    const filename = getFilenameFromPath(path);
    assert.equal(filename, "file.txt");
  });
});

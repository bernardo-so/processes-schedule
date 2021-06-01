import ProcessController from "../src/controllers/ProcessController"

const processController = new ProcessController();
console.log("\nProcess list: ", processController.createProcessList());
console.log("\nProcess ordered by priority: ", processController.setByPriority());
console.log("\nProcess ordered by size: ", processController.setBySize());
console.log("\nProcess ordered by arrival: ", processController.setByArrival());
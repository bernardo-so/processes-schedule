import Process from "../entities/Process"
import * as data from '../processes.json';

export default class ProcessController {
    processList: Array<Process> = [];

    createProcessList() {
        const process = data.processes;

        process.forEach(processItem => {
            this.processList.push(new Process(processItem.id, processItem.process, processItem.priority, processItem.runtime, processItem.size));
        });

        return this.processList;
    }

    checkByPriority(process1, process2) {
        return this.checkByPriorityFirstStep(process1, process2);
    }

    checkByPriorityFirstStep(process1, process2) {
        return process1.priority == process2.priority ? this.checkByPrioritySecondStep(process1, process2) : process1.priority - process2.priority;
    }

    checkByPrioritySecondStep(process1, process2) {
        return process1.id == process2.id ? this.checkByPriorityThirdStep(process1, process2) : process1.id - process2.id;
    }

    checkByPriorityThirdStep(process1, process2) {
        return process1.size == process2.size ? process1 : process1.size - process2.size;
    }

    checkBySize(process1, process2) {
        return this.checkBySizeFirstStep(process1, process2);
    }

    checkBySizeFirstStep(process1, process2) {
        return process1.size == process2.size ? this.checkBySizeSecondStep(process1, process2) : process1.size - process2.size;
    }

    checkBySizeSecondStep(process1, process2) {
        return process1.id == process2.id ? process1 : process1.id - process2.id;
    }

    setByPriority() {
        return this.processList.sort((process1, process2) => this.checkByPriority(process1, process2));
    }

    setBySize() {
        return this.processList.sort((process1, process2) => this.checkBySize(process1, process2));
    }

    setByArrival() {
        return this.processList.sort((process1, process2) => process1.id - process2.id);
    }
}
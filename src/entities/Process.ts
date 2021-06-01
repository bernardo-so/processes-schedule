export default class Process {
    
    id: number;
    process: string;
    priority: number;
    runtime: number;
    size: number;

    constructor(id: number, process: string, priority: number, runtime: number, size: number) {
        this.id = id;
        this.process = process;
        this.priority = priority;
        this.runtime = runtime;
        this.size = size;
    }
}
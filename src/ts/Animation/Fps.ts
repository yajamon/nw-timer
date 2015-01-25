module Animation {
    export class Fps {

        constructor(private value:number) {
        }

        public frameTime() :number {
            return Math.floor(1000 / this.value);
        }

    }
}

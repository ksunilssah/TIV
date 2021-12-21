import {makeObservable, observable, action, computed } from 'mobx';

class BirdStore {
    @observable birds = [];

    constructor() {
        makeObservable(this)
    }
    
    @action addBird = (bird) => {
        this.birds.push(bird);
    }

    @computed get BirdCount() {
        return this.birds.length;
    }
}

const birdStore = new BirdStore();
export default birdStore;

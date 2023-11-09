import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export default class Loaders {
    constructor() {
        this.gltfLoader = new GLTFLoader();
    }
}
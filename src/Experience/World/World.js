import * as THREE from 'three'
import Experience from "../Experience";


export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.gltfLoader = this.experience.loaders.gltfLoader

        this.loadFox()
    }

    loadFox() {
        this.gltfLoader.load('models/Fox/glTF/Fox.gltf', 
        (gltf) => {
            this.scene.add(gltf.scene)
            gltf.scene.scale.set(0.01, 0.01, 0.01)
            console.log(gltf);
        }),
        () => {},
        (err) => console.log(err)
    }
}
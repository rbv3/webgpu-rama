import * as THREE from 'three'
import WebGPU from 'three/addons/capabilities/WebGPU.js';
import WebGPURenderer from 'three/addons/renderers/webgpu/WebGPURenderer.js';

import Experience from "./Experience.js";

export default class Renderer {
    constructor() {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.camera = this.experience.camera

        console.log('all good');
        this.setInstance()
    }

    setInstance() {
        if ( WebGPU.isAvailable() === false ) {

            document.body.appendChild( WebGPU.getErrorMessage() );

            throw new Error( 'No WebGPU support' );
        }
        console.log(this.canvas)
        this.instance = new WebGPURenderer({
            canvas: this.canvas,
            antialias: true
        })
        console.log(this.instance)
        this.instance.toneMapping = THREE.CineonToneMapping
        this.instance.toneMappingExposure = 1.75
        this.instance.shadowMap.enabled = true
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap
        this.instance.setClearColor('#211d20')
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }
    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height)
        this.instance.setPixelRatio(this.sizes.pixelRatio)
    }
    update() {
        this.instance.render(this.scene, this.camera.instance)
    }
}
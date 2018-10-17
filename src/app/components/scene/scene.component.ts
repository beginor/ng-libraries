import {
    transition, trigger, useAnimation
} from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import {
    Component, ElementRef, OnDestroy, OnInit, ViewChild
} from '@angular/core';

import { loadScript } from 'esri-loader';
import * as esri from 'esri-service';

import { fadeIn } from 'ng-animations';

@Component({
    moduleId: module.id,
    selector: 'app-scene',
    templateUrl: './scene.component.html',
    styleUrls: ['./scene.component.scss'],
    animations: [
        trigger('state', [
            transition(':enter', useAnimation(fadeIn))
        ])
    ],
    host: {
        '[@state]': ''
    }
})
export class SceneComponent implements OnInit, OnDestroy {

    public state: any;

    @ViewChild('mapElement') public mapElement: ElementRef;

    private sceneView: __esri.SceneView;

    constructor(
        private http: HttpClient
    ) {
    }

    public async ngOnInit(): Promise<void> {
        try {
            await loadScript({
                url: 'https://js.arcgis.com/4.9/init.js',
                css: 'https://js.arcgis.com/4.9/esri/css/main.css'
            });
            const map = await esri.createMap({
                basemap: 'satellite',
                ground: 'world-elevation'
            });
            const sceneView = await esri.createSceneView({
                container: this.mapElement.nativeElement,
                map,
                zoom: 7,
                center: { longitude: 113.2, latitude: 23.4 },
                viewingMode: 'local'
            });
            this.sceneView = sceneView;

            await sceneView.when();

            const basemapProps = await this.http.get<any[]>(
                './assets/base-map.config.json'
            ).toPromise();

            const localSource = await esri.createLocalSource(
                basemapProps
            );
            const gallery = await esri.createBasemapsGallery(
                {
                    view: this.sceneView,
                    source: localSource
                },
                {
                    expandTooltip: '底图'
                }
            );
            this.sceneView.ui.add(gallery, 'top-left');
        }
        catch (ex) {
            console.error(ex);
        }
    }

    public ngOnDestroy() {
        // this.sceneView.destroy();
    }
}

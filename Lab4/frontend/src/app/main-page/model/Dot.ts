import {CoordinatesMapperService} from '../../share/services/coordinates-mapper.service';

export class Dot {
  x: number;
  y: number;
  r: number;
  isHit: boolean;
  svgX: number;
  svgY: number;

  constructor(x: number, y: number, r: number, isHit: boolean) {
    this.x = Math.round(x*1000)/1000;
    this.y = Math.round(y*1000)/1000;
    this.r = r;
    this.isHit = isHit;
    this.svgX = CoordinatesMapperService.areaXtoSvgX(x, r);
    this.svgY = CoordinatesMapperService.areaYtoSvgY(y, r);
  }

  changeRadius(newR: number){
    this.svgX = CoordinatesMapperService.areaXtoSvgX(this.x, newR);
    this.svgY = CoordinatesMapperService.areaYtoSvgY(this.y, newR)
  }

}


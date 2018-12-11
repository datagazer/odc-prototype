import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';
import { chart } from 'highcharts';

@Directive({
  selector: 'app-line-chart'
})
export class LineChartDirective implements AfterViewInit {
  @Input()
  public readonly data: any[];

  constructor(
    private readonly $elementRef: ElementRef
  ) {}

  public ngAfterViewInit(): void {
    chart(this.$elementRef.nativeElement, {
      chart: {
        type: 'line'
      },

      xAxis: {
        type: 'datetime'
      },

      yAxis: {
        type: 'linear',
        title: null
      },

      series: [
        { data: this.data }
      ],

      title: null,

      legend: {
        enabled: false
      },

      credits: {
        enabled: false
      }
    });
  }
}

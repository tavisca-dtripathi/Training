import { LitElement, html, customElement, property, css } from 'lit-element';
import { Component, OnInit, Input, Output } from "@angular/core";
@customElement('data-grid')

export class DataGrid extends LitElement {
    private _DataSource: Array<any>;
    headers: Array<string>;
    constructor() {
        super();
        this._DataSource = new Array<any>();
        this.headers = Array<string>();
    }

    static get properties() {
        return {
        };
    }

    @Input()
    set DataSource(val: Array<any>) {
        if (val.length > 0) {
            this._DataSource = val;
            for (let p in this._DataSource[0]) {
                this.headers.push(p);
            }
        } else {
            this._DataSource = new Array<any>();
        }
    }
    get DataSource(): Array<any> {
        return this._DataSource;
    }



    render() {
        return html`
        <div class="container">
        <table class="table">
            <thead class="thead-dark">
            <tr>
            <th>
            <div class="form-check">
            <input type="checkbox">
            </div>
            </th>
            ${this.headers.map(i => html`<th style="font-family:verdana;">${i}</th>`)}
            </tr>
            </thead>
            <tbody>
            ${this.DataSource.map(x => html`<tr><td><div class="form-check">
            <input type="checkbox">
            </div>
            </th></td>${this.headers.map(y => html`<td>${x[y]}</td>`)}</tr>`)}
            </tbody>
        </table>
    </div>
        `;
    }
}
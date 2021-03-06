import React from 'react';
import Shape from './Shape';

class Path extends Shape {
	constructor() {
		super();
		this.pathData = [];
		return this;
	}
	/**
	 * Move svg cursor to x, y.
	 */
	m = (x, y) => this.moveTo(x, y, true);
	M = (x, y) => this.moveTo(x, y);
	moveTo = (x, y, relative = false) => {
		this.pathData.push(`${relative ? 'm' : 'M'}${x} ${y}`);
		return this;
	};

	/**
	 * Draw straight line to x, y.
	 */
	l = (x, y) => this.lineTo(x, y, true);
	L = (x, y) => this.lineTo(x, y);
	lineTo = (x, y, relative = false) => {
		this.pathData.push(`${relative ? 'l' : 'L'}${x} ${y}`);
		return this;
	};
	/**
	 * Draw a horizontal line to x.
	 */
	H = (x) => this.horizontalTo(x);
	h = (x) => this.horizontalTo(x, true);
	horizontalTo = (x, relative = false) => {
		this.pathData.push(`${relative ? 'h' : 'H'}${x}`);
		return this;
	}

	/**
	 * Draw a vertical line to y.
	 */
	V = (y) => this.verticalTo(y);
	v = (y) => this.verticalTo(y, true);
	verticalTo = (x, relative = false) => {
		this.pathData.push(`${relative ? 'v' : 'V'}${x}`);
		return this;
	}

	/**
	 * Draw quadratic curve to ex, ey using cx,cy as the control point.
	 */
	Q = (cx, cy, ex, ey) => this.qCurveTo(cx, cy, ex, ey);
	q = (cx, cy, ex, ey) => this.qCurveTo(cx, cy, ex, ey, true);
	qCurveTo = (cx, cy, ex, ey, relative = false) => {
		this.pathData.push(`${relative ? 'q' : 'Q'}${cx} ${cy}`);
		this.pathData.push(`${ex} ${ey}`);
		return this;
	};

	T = (ex, ey) => {
		this.pathData.push(`T ${ex} ${ey}`);
		return this;
	}

	t = (ex, ey) => {
		this.pathData.push(`t ${ex} ${ey}`);
		return this;
	}

	S = (cx, cy, ex, ey) => this.sCurveTo(cx, cy, ex, ey);
	s = (cx, cy, ex, ey) => this.sCurveTo(cx, cy, ex, ey, true);
	sCurveTo = (cx, cy, ex, ey, relative = false) => {
		this.pathData.push(`${relative ? 's' : 'S'}${cx} ${cy} ${ex} ${ey}`);
		return this;
	}

	C = (cx1, cy1,cx2, cy2, ex, ey) => this.cCurveTo(cx1, cy1,cx2, cy2, ex, ey);
	c = (cx1, cy1,cx2, cy2, ex, ey) => this.cCurveTo(cx1, cy1,cx2, cy2, ex, ey, true);
	cCurveTo = (cx1, cy1,cx2, cy2, ex, ey, relative = false) => {
		this.pathData.push(`${relative ? 'c' : 'C'}${cx1} ${cy1} ${cx2} ${cy2} ${ex} ${ey}`);
		return this;
	}

	A = (rx, ry, rotation, arcFlag, sweepFlag, ex, ey) => this.arc(rx, ry, rotation, arcFlag, sweepFlag, ex, ey);
	a = (rx, ry, rotation, arcFlag, sweepFlag, ex, ey) => this.arc(rx, ry, rotation, arcFlag, sweepFlag, ex, ey, true);
	arc = (rx, ry, rotation, arcFlag, sweepFlag, ex, ey, relative = false) => {
		this.pathData.push(`${relative ? 'a' : 'A'}${rx} ${ry} ${rotation} ${arcFlag} ${sweepFlag} ${ex} ${ey}`);
		return this;
	}

	down = px => this.v(px);
	up = px => this.v(px*-1);
	right = px => this.h(px);
	left = px => this.h(px*-1);

	Down = px => this.V(px);
	Up = px => this.V(px*-1);
	Right = px => this.H(px);
	Left = px => this.H(px*-1);


	/**
	 * Close path.
	 */
	close = () => {
		this.pathData.push('z');
		return this;
	};
	/**
	 * Return pathData array.
	 */
	toArray = () => this.pathData;
	/**
	 * Return joined pathData array.
	 */
	toString = () => this.pathData.join(' ');

	toComponent = key => () => this.toElement(key);

	toElement = (key = Math.random()) => <path key={key} d={this.toString()} {...this.attributes} />;
}

export default Path;

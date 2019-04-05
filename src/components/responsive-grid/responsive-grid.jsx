import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';
import './responsive-grid.scss';

class ResponsiveGrid extends Component {
    static propTypes = {
        children: PropTypes.node,
        layouts: PropTypes.instanceOf(Array),
    }

    static defaultProps = {
        children: null,
        layouts: [{
            columns: 3,
            screenWidth: 0,
            gutterWidth: 30,
            gutterHeight: 20,
        }]
    }

    state = {
        layout: this.props.layouts[0],
    }

    componentDidMount () {
        if (typeof window !== 'undefined') {
            this.onWindowResize();
            this.onWindowResize = throttle(this.onWindowResize, 500);
            window.addEventListener('resize', this.onWindowResize);
        }
    }

    componentWillUnmount () {
        window.removeEventListener('resize', this.onWindowResize);
    }

    onWindowResize = () => {
        const width = window.innerWidth;
        const { layouts } = this.props;
        const layout =
            layouts.filter(c => c.screenWidth <= width).reduce(function(layoutA, layoutB) {
                return layoutA.screenWidth > layoutB.screenWidth ? layoutA : layoutB;
            });
        
        this.setState({
            layout,
        });
    }

    getColumnWidth (columns) {
        return `${100 / columns}%`;
    }

    getMarginRight (columns, index, gutterWidth) {
        return index < columns - 1  ? gutterWidth : 0;
    }

    getMarginBottom (index, length, gutterHeight) {
        return index < length - 1 ? gutterHeight : 0;
    }

    splitChildrenToColumns (columns) {
        const children = React.Children.toArray(this.props.children);
        let columnIndex = 0;
        const arr = [];
        for (let i = 0; i < columns; i++) {
            arr[i] = [];
        }
        children.forEach((child) => {
            const subArr = arr[columnIndex];
            subArr.push(child);
            columnIndex++;
            if (columnIndex === columns) {
                columnIndex = 0;
            }
        });
        return arr;
    }

    render () {
        const { children } = this.props;
        if (!children) {
            return (null);
        }
        const { layout } = this.state;
        const { columns, gutterWidth, gutterHeight } = layout;
        const columnWidth = this.getColumnWidth(columns);
        const chunks = this.splitChildrenToColumns(columns);
        return (
            <div className='responsive-grid'>
               {[...Array(columns)].map((columItem, column) => {
                   const columnChildren = chunks[column];
                   const marginRight = this.getMarginRight(columns, column, gutterWidth);
                   return (
                       <div
                            key={column}
                            style={{ width: columnWidth, marginRight: `${marginRight}px` }}
                            className='responsive-grid_grid-column'
                        >
                            {columnChildren.map((child, index) => {
                                const marginBottom = this.getMarginBottom(index, columnChildren.length, gutterHeight);
                                return (
                                    <div
                                        key={index}
                                        className='responsive-grid__grid-cell' style={{ marginBottom: `${marginBottom}px` }}
                                    >
                                        {child}
                                    </div>
                                )
                            })}
                       </div>
                   )
               })}
            </div>
        )
    }
}

export default ResponsiveGrid;

import fs from 'fs';

export const inputToString = filename => {
    let data = fs.readFileSync(filename, 'utf8');
    return data;
}

export const inputToStringArray = filename => {
    let data = fs.readFileSync(filename, 'utf8');
    data = data.replaceAll('\r', '').split('\n');
    return data;
}

export const inputWithLineBreaksTo2dStringArray = filename => {
    let data = fs.readFileSync(filename, 'utf8');
    data = data.replaceAll('\r', '').split('\n');

    let combined = []
    let current = []
    data.forEach(s => {
        if (s === '') {
            combined.push(current)
            current = []
        } else {
            current.push(s)   
        }
    });
    return combined
}

export const isWithinGridBounds = (grid, position) => {
    if (position.x < grid.length
        && position.x >= 0
        && position.y < grid[0].length
        && position.y >= 0) {
        return true;
    }
    return false;
}

export const inputToIntArray = (filename, separator) => {
    let data = fs.readFileSync(filename, 'utf8');
    data = data.split(separator);
    for (let i = 0; i < data.length; i++) {
        data[i] = parseInt(data[i])
    }
    return data;
}

export const inputToGrid = (filename) => {
    let data = fs.readFileSync(filename, 'utf8');
    data = data.split('\n');
    const grid = [];
    for (let i = 0; i < data.length; i++) {
        const row = [];
        for (let j = 0; j < data[i].length; j++) {
            if (data[i][j] !== '\r') row.push(data[i][j])
        }
        grid.push(row);
    }
    return grid;
}
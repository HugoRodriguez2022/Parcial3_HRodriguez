(() => {
  function randCornerValue() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function createMatrixWithCorners(n) {
    const matrix = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));

    const corners = [
      [0, 0],
      [0, n - 1],
      [n - 1, 0],
      [n - 1, n - 1]
    ];

    for (const [r, c] of corners) {
      matrix[r][c] = randCornerValue();
    }

    return matrix;
  }

  function sumCorners(matrix) {
    const n = matrix.length;
    if (n === 0) return 0;
    if (n === 1) return matrix[0][0];
    return matrix[0][0] + matrix[0][n - 1] + matrix[n - 1][0] + matrix[n - 1][n - 1];
  }

  function renderMatrix(matrix) {
    const n = matrix.length;
    const table = document.createElement('table');
    table.className = 'table table-bordered matrix-table';

    const tbody = document.createElement('tbody');

    for (let i = 0; i < n; i++) {
      const tr = document.createElement('tr');
      for (let j = 0; j < n; j++) {
        const td = document.createElement('td');
        td.textContent = matrix[i][j];
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    return table;
  }

  function setup() {
    const generateBtn = document.getElementById('generateBtn');
    const nInput = document.getElementById('nInput');
    const resultDiv = document.getElementById('result');
    const cornersSumSpan = document.getElementById('cornersSum');

    if (!generateBtn || !nInput || !resultDiv || !cornersSumSpan) {
      console.warn('Elementos esperados no encontrados en el DOM: asegúrate de que existan los IDs nInput, generateBtn, result y cornersSum.');
      return;
    }

    generateBtn.addEventListener('click', () => {
      const n = parseInt(nInput.value, 10);

      if (!Number.isInteger(n) || n < 1) {
        alert('Ingresa un número entero válido mayor o igual a 1.');
        return;
      }

      const matrix = createMatrixWithCorners(n);
      const sum = sumCorners(matrix);

      resultDiv.innerHTML = '';
      resultDiv.appendChild(renderMatrix(matrix));

      cornersSumSpan.textContent = sum;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }

})();

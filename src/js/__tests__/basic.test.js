import healthCount from '../basic';

test.each(
  [['Маг', 90, 'healthy'],
    ['Воин', 40, 'wounded'],
    ['Лучник', 10, 'critical'],
    ['Варвар', 0, 'dead'],
  ],
)(
  ('healthCount'),
  (name, health, expected) => {
    const result = healthCount(health);
    expect(result).toBe(expected);
  },
);

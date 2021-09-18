export default function healthCount(health) {
  if (health > 50 && health <= 100) {
    return ('healthy');
  }

  if (health <= 50 && health >= 15) {
    return ('wounded');
  }

  if (health < 15 && health > 0) {
    return ('critical');
  }

  return ('dead');
}

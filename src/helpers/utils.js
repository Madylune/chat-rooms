import random from 'lodash/random'
import padStart from 'lodash/padStart'

export const generateRoomCode = () => padStart(random(0, 9999), 4, '0')
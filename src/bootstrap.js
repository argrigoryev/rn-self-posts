import * as Font from 'expo-font'
import {DB} from './db'

export async function bootstrap() {
    try {
        await Font.loadAsync({
            'open-bold': require('../assets/fons/OpenSans-Bold.ttf'),
            'open-regular': require('../assets/fons/OpenSans-Regular.ttf')
        })
        await DB.init()
        console.log('Database started...')
    } catch (e) {
        console.log('Error: ', e)
    }
}
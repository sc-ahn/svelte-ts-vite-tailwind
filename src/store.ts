import { writable } from 'svelte/store'
import type { IMockResponse }  from './interfaces/IMockResponse'

export const mockResponse = writable({} as IMockResponse)

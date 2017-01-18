import i18n from '../lib/i18n'

describe('i18n', () => {
  let instance

  beforeEach(() => {
    instance = new i18n()
  })

  it('sets the language when a prop is passed', () => {
    expect(instance.language === 'en').toBe(true)
  })

  it('sets the default language as "en" when no params are given', () => {
    instance = new i18n('nl')
    expect(instance.language).toBe('nl')
  })

  it('triggers an event when the langauge is changed', () => {
    const cb = jest.fn()

    instance.on('language-change', cb)
    instance.language = 'nl'
    expect(cb).toHaveBeenCalled()
  })
})

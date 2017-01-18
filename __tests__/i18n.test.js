import i18n from '../lib/i18n'

describe('i18n', () => {
  let instance

  beforeEach(() => {
    instance = new i18n()
  })

  describe('#constructor', () => {
    it('sets the language when a prop is passed', () => {
      expect(instance.language === 'en').toBeTruthy()
    })

    it('sets the default language as "en" when no params are given', () => {
      instance = new i18n('nl')
      expect(instance.language).toBe('nl')
    })

    it('triggers an event when the language is changed', () => {
      const cb = jest.fn()

      instance.on('language-change', cb)
      instance.language = 'nl'

      expect(cb).toHaveBeenCalledTimes(1)
      expect(cb).toHaveBeenCalledWith('nl')
    })
  })

  describe('#getDOMLocale', () => {
    it('returns a valid locale from the DOM', () => {
      const locale = i18n.getDOMLocale().split('-')[0]
      expect(locale).toBe('en')
    })
  })

  describe('#translator', () => {
    it('throws if no messages are supplied', () => {
      expect(() => {
        instance.translator()
      }).toThrow()
    })
  })
})

import '../scss/main.scss'

$( document ).ready(function() {
    function URLChanger() {
        if (document.URL.includes('/hc/tr/')) {
            document.location = document.URL.replace('/hc/tr/', '/hc/en-us/')
        }
        if (document.URL.includes('/hc/en-us/')) {
            document.location = document.URL.replace('/hc/en-us/', '/hc/tr/')
        }
    }

    (function countryChange() {
        const $selectContainer = $('.select')
        const $selectItem = $('.select__item')

        if (!$('.breadcrumbs')[0].innerText.includes('1C:Drive') ) {
            $selectContainer.css({'height' : '0', 'opacity' : '0'})
        } else {
            try {
                if (document.URL.includes('/hc/tr/')) {
                    $('.select__head')[0].innerHTML = $('.turkey')[0].innerHTML
                    $('.turkey').addClass('highlighted')
                } else {
                    $('.global').addClass('highlighted')
                }

                $selectContainer.on('click', '.select__head', function () {
                    const $this = $(this)
                    $this.toggleClass('open')
                    $this.next().fadeToggle(100)
                })

                $selectItem.on('click', function () {
                    const $this = $(this)

                    $('.select__head')[0].innerHTML = $this[0].innerHTML
                    $selectItem.removeClass('highlighted')
                    $this.addClass('highlighted')

                    URLChanger()
                })
            } catch (e) {
                console.log(e)
            }
        }
    } ())

});

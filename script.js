// Wait for the DOM to be fully loaded
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new Typed(".typing", {
        strings: ["full stack developer", "Data scientist", "ai/ml engineer", "Devops", "prompt Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["full stack developer", "Data scientist", "ai/ml engineer", "Devops", "prompt Engineer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 1, nav: false },
            600: { items: 2, nav: false },
            1000: { items: 3, nav: false }
        }
    });

    // Chart.js pie chart with clickable links
    const certLinks = [
        "https://coursera.org/share/2e9b363e8868bca049ee77f88e706e1c",
        "https://coursera.org/share/2a36e80cf6ca7727ffdcadf870638ef2",
        "https://drive.google.com/file/d/1jlPMRNDSPBuueej0jiLt9M9CgYrrVlPP/view?usp=sharing"
    ];

    const ctx = document.getElementById('certChart').getContext('2d');
    const certChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['TensorFlow for AI, ML, and DL', 'AI for Everyone', 'Data Science using R'],
            datasets: [{
                data: [1, 1, 1],
                backgroundColor: ['#4CAF50', '#2196F3', '#FFC107'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label;
                        }
                    }
                },
                legend: {
                    position: 'bottom'
                }
            },
            onClick: function(evt, elements) {
                if (elements.length > 0) {
                    const index = elements[0].index;
                    const url = certLinks[index];
                    window.open(url, '_blank');
                }
            }
        }
    });
});
// Smooth scroll for anchor links (optional)
$('.navbar .menu li a').click(function(){
    $('html').css("scrollBehavior", "smooth");
  });
  
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from '@angular/router';
import { BlogTagComponent } from '@components/blog-tag/blog-tag.component';
import { ButtonComponent } from '@components/button/button.component';
import { NewsComponent } from '@components/news/news.component';
import { AnimatedButton } from '@components/animated-button/animated-button.component';
import { Subscription, filter } from 'rxjs';
import { blogList } from '../blogList';

@Component({
  selector: 'app-product-manufacturing',
  imports: [
    CommonModule,
    BlogTagComponent,
    ButtonComponent,
    AnimatedButton,
    RouterLink,
    NewsComponent,
  ],
  templateUrl: './product-manufacturing.component.html',
  styleUrls: ['./product-manufacturing.component.scss'],
})
export class ProductManufacturingComponent implements OnInit, AfterViewInit, OnDestroy {
  tags = ['Whitepapper', 'Signal Integrity', 'AI Hardware Design'];

  blogs = blogList;

  private fragmentSubscription!: Subscription;
  private navigationSubscription!: Subscription;
  currentFragment: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Update meta tag for sharing
      const url = encodeURIComponent(window.location.href);
      this.meta.updateTag({ property: 'og:url', content: url });
    }

    // Fragment changes
    this.fragmentSubscription = this.route.fragment.subscribe(fragment => {
      if (isPlatformBrowser(this.platformId) && fragment) {
        this.currentFragment = fragment;
        this.scrollToCategory(fragment);
      }
    });

    // Handle navigation changes
    this.navigationSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        if (isPlatformBrowser(this.platformId)) {
          const fragment = this.route.snapshot.fragment;
          if (fragment && fragment !== this.currentFragment) {
            this.currentFragment = fragment;
            this.scrollToCategory(fragment);
          }
        }
      });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const links = document.querySelectorAll('.link-to-power');
      links.forEach(link => {
        link.addEventListener('click', () => {
          this.router.navigate(['/services/engineering-design/power-delivery-network-simulation']);
        });
      });
    }
  }

  ngOnDestroy(): void {
    this.fragmentSubscription?.unsubscribe();
    this.navigationSubscription?.unsubscribe();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const sections = [
      'section1',
      'section2',
      'section3',
      'section4',
      'section5',
      'section6',
      'section7',
      'section8',
      'section9',
      'section10',
      'section11',
      'section12',
      'section13',
      'section14',
      'section15',
      'section16',
      'section17',
      'section18',
      'section19',
      'section20',
      'section21',
      'section22',
      'section23',
      'section24',
      'section25',
      'section26',
      'section27',
      'section28',
      'section29',
      'section30',
    ];
    const headerOffset = 500;

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        const adjustedTop = rect.top - headerOffset;
        if (adjustedTop <= 0 && rect.bottom > headerOffset) {
          this.currentFragment = id;
          break;
        }
      }
    }
  }

  scrollToCategory(id: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.currentFragment = id;
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerHeight * 0.42;
      window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
    }
  }

  isActive(id: string): boolean {
    return this.currentFragment === id;
  }

  shareOnTwitter(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const pageUrl = window.location.href;
    const text = encodeURIComponent(
      `🚀 High-Speed AI Design Challenges & Robust SI Techniques\n\nProudly built by @whizzsystems.\n\n`
    );
    const hashtags = encodeURIComponent('High-Speed AI Design,Signal Integrity,AI Hardware Design');
    window.open(`https://twitter.com/intent/tweet?text=${text}&hashtags=${hashtags}&url=${encodeURIComponent(pageUrl)}`, '_blank');
  }

  shareOnLinkedIn(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  }
}


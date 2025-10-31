import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tools-used-slider',
  imports: [CommonModule],
  templateUrl: './tools-used-slider.component.html',
  styleUrl: './tools-used-slider.component.css'
})
export class ToolsUsedSliderComponent {
  tools = [
    { name: 'ChatGPT', logo: 'https://cloudpng.com/images/all_img/1750845599_chatgpt-logo-png.png' },
    { name: 'N8N', logo: 'https://d7umqicpi7263.cloudfront.net/img/product/0a44c3f1-ca37-4602-8660-9e1bdbafac7b.com/e166b9e69c37dd6330db3cb819181663' },
    { name: 'Synthflow AI', logo: 'https://www.fahimai.com/wp-content/uploads/2024/09/CTA-11.png' },
    { name: 'Zapier', logo: 'https://tse1.mm.bing.net/th/id/OIP.rsFi-9eQhPmwT9GPsm5yQgHaDY?rs=1&pid=ImgDetMain&o=7&rm=3' },
    { name: 'Stripe', logo: 'https://1000logos.net/wp-content/uploads/2021/05/Stripe-logo.png' },
    { name: 'Azure', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/480px-Microsoft_Azure.svg.png' },
  ];


  companyLogo = 'assets/images/logo.svg'; // your logo in the center
}

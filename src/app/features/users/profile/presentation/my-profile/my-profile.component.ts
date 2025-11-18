import {Component, inject, OnInit} from '@angular/core';
import {ProfileRepository} from '../../domain/repositories/profile.repository';
import {ProfileRepositoryImpl} from '../../data/repositories/profile.repository.impl';
import {User} from '../../../../dashboard/domain/entities/user';
import {ReactiveFormsModule} from '@angular/forms';
import {MediumBotton} from '../../../../../core/shared/presentation/buttons/medium-botton/medium-botton';
import {AuthApiServiceImpl} from '../../../../auth/login/data/services/auth.api.service.impl';
import {TokenService} from '../../../../../core/shared/data/services/token/token.service';
import {AuthApiService} from '../../../../auth/login/data/services/auth.api.service';
import {Router} from '@angular/router';
import {AppPaths} from '../../../../../core/constants/path.constants';

@Component({
  selector: 'app-my-profile',
  imports: [
    ReactiveFormsModule,
    MediumBotton
  ],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})

export class MyProfileComponent implements OnInit {

  user: User | null = null;
  private profileRepository: ProfileRepository = inject(ProfileRepositoryImpl);
  private authService: AuthApiService = inject(AuthApiServiceImpl);
  private tokenService: TokenService = inject(TokenService)
  private router = inject(Router);

  ngOnInit(): void {
    this.profileRepository.getProfile().subscribe(user => {
      if (user === null) {
        return;
      }

      this.user = user;
    })
  }

  logout() {
    this.authService.logout?.();
    this.tokenService.removeToken()
    this.router.navigateByUrl(AppPaths.login, {replaceUrl: true}).then(() => {
    });
  }
}

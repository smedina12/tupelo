(function() {

  'use strict';
  angular.module('ionic-datetimepicker', [ 'ionic', 'ionic-datetimepicker.templates' ]);
})();

(function() {

  'use strict';

  angular
  .module('ionic-datetimepicker')
  .controller('DateTimePickerCtrl', [ '$scope', 'DateTimePickerService', function ($scope, DateTimePickerService) {

    var type  = 'date'
      , today = new Date();

	var allowtime = false;

    this.getDaysOfWeek = function() {
      if (!this.weekdays) {
        this.weekdays = DateTimePickerService.getDaysOfWeek();
      }
      return this.weekdays;
    };

    this.getMonths = function() {
      if (!this.months) {
        this.months = DateTimePickerService.getMonths();
      }
      return this.months;
    };

    this.getYears = DateTimePickerService.getYears;

    this.getHours = DateTimePickerService.getHours;

    this.getMinutes = DateTimePickerService.getMinutes;

    this.initialize = function() {
	  this.allowtime = $scope.datetime;
      this.selectedDate = angular.copy($scope.date || new Date());
      this.tempDate = angular.copy(this.selectedDate);

      this.createDateList(this.selectedDate);
    };

    this.getDate = function(row, col) {
      return this.dateList[row * 7 + col];
    };

    this.isDefined = function(date) {
      return date !== undefined;
    };

    this.isDisabled = function(date) {
      if (!date) return true;
      if ($scope.min) {
		if ($scope.datetime) {
			$scope.min.setHours($scope.min.getHours(), $scope.min.getMinutes(), 0, 0);
		} else {
			$scope.min.setHours(0, 0, 0, 0);
		}
        if (date < $scope.min) return true;
      }
      if ($scope.max) {
        if ($scope.datetime) {
			$scope.max.setHours($scope.max.getHours(), $scope.max.getMinutes(), 0, 0);
		} else {
			$scope.max.setHours(0, 0, 0, 0);
		}
        if (date > $scope.max) return true;
      }
      return false;
    };

    this.isActualDate = function(date) {
      if (!date) return false;
      return date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();
    };

    this.isActualMonth = function(month) {
      return month === today.getMonth();
    };

    this.isActualYear = function(year) {
      return year === today.getFullYear();
    };

    this.isActualHour = function(hour) {
      return parseInt(hour) === today.getHours();
    };

    this.isActualMinute = function(minute) {
      return parseInt(minute) === today.getMinutes();
    };

    this.isSelectedDate = function(date) {
      if (!date) return false;
      return date.getDate() === this.selectedDate.getDate() &&
        date.getMonth() === this.selectedDate.getMonth() &&
        date.getFullYear() === this.selectedDate.getFullYear();
    };

    this.isSelectedMonth = function(month) {
      return month === this.tempDate.getMonth();
    };

    this.isSelectedYear = function(year) {
      return year === this.tempDate.getFullYear();
    };

    this.isSelectedHour = function(hour) {
      return parseInt(hour) === parseInt(this.tempDate.getHours());
    };

    this.isSelectedMinute = function(minute) {
      return parseInt(minute) === parseInt(this.tempDate.getMinutes());
    };

    this.changeType = function(val) {
      type = val;
    };

    this.showType = function(val) {
      return type === val;
    };

    this.selectDate = function (date) {
		if (this.isDisabled(date)) return;
		this.selectedDate = angular.copy(date);
		if (this.allowtime) {
			this.selectedDate.setHours(this.tempDate.getHours() , this.tempDate.getMinutes(), 0, 0);
		} else {
			this.selectedDate.setHours(0 , 0, 0, 0);
		}
		this.tempDate = angular.copy(this.selectedDate);
    };

    this.selectMonth = function(month) {
      this.tempDate = angular.copy(this.tempDate);
      this.tempDate.setMonth(month);
      if (this.tempDate.getMonth() !== month) {
        this.tempDate.setDate(0);
      }
      this._selectMonthOrYear();
    };

    this.selectYear = function(year) {
      this.tempDate = angular.copy(this.tempDate);
      this.tempDate.setFullYear(year);
      this._selectMonthOrYear();
    };

    this.selectHour = function(hour) {
      this.tempDate = angular.copy(this.tempDate);
      this.tempDate.setHours(hour);
      this._selectMonthOrYear();
    };

    this.selectMinute = function(minute) {
      this.tempDate = angular.copy(this.tempDate);
      this.tempDate.setMinutes(minute);
      this._selectMonthOrYear();
    };

    this._selectMonthOrYear = function() {
      this.changeType('date');
      this.createDateList(this.tempDate);
      if (this.isDisabled(this.tempDate)) return;
      this.selectedDate = this.tempDate;
    };

    this.createDateList = function(selectedDate) {
      this.dateList = DateTimePickerService.createDateList(selectedDate);
      this.cols = new Array(7);
      this.rows = new Array(parseInt(this.dateList.length / this.cols.length) + 1);
    };

    this.getSelectedWeekday = function() {
      if (!this.weekdays) this.getDaysOfWeek();
      return this.weekdays[this.selectedDate.getDay()];
    };

    this.getSelectedMonth = function() {
      if (!this.months) this.getMonths();
      return this.months[this.selectedDate.getMonth()];
    };

    this.getTempMonth = function() {
      if (!this.months) this.getMonths();
      return this.months[this.tempDate.getMonth()];
    };

    this.onCancel = function(e) {
      this.selectedDate = angular.copy($scope.date || new Date());
      $scope.callback(undefined);
    };

	this.getAMPM = function(e) {
		  return (this.selectedDate.getHours() < 12) ? 'AM' : 'PM';
	};

	this.getFriendlyHours = function(e) {
		  return (this.selectedDate.getHours() < 12) ? ((this.selectedDate.getHours() < 1 ) ? 12 : this.selectedDate.getHours()) : ((this.selectedDate.getHours() == 12) ? this.selectedDate.getHours() : this.selectedDate.getHours() - 12);
	};
	this.toggleMeridian = function(e) {
		if (this.selectedDate.getHours() < 12) {
			this.selectHour(this.selectedDate.getHours() + 12);
		} else {
			this.selectHour(this.selectedDate.getHours() - 12);
		}
	};
    this.onDone = function(e) {
      $scope.date = angular.copy(this.selectedDate);
      $scope.callback($scope.date);
    };

  }]);
})();

(function() {

  'use strict';

  angular
  .module('ionic-datetimepicker')
  .directive('ionicDatetimepicker', [ '$ionicModal', function ($ionicModal) {

    return {
      restrict: 'E',
      replace: true,
      controller: 'DateTimePickerCtrl',
      controllerAs: 'datetimepickerCtrl',
      scope: {
        date: '=',
        min: '=',
        max: '=',
        callback: '=',
        datetime: '='
      },
      link: function (scope, element, attrs, controller) {

        var scroll = function(el) {
          var $$container = $(el)
            , $$element   = $(el + ' .datepicker-selected')
            , offset      = $$element.offset().top + $$container.scrollTop() - $$container.offset().top - ($$container.height() / 2);
          if (offset === 0) return;
          $$container.animate({ scrollTop: offset });
        };

        scope.show = function(modal) {

          scope.modal = modal;
          controller.initialize();
          scope.modal.show();

          $('.datepicker-month-js').on('click', function() { scroll('.datepicker-month-content-js'); });
          $('.datepicker-year-js').on('click', function() { scroll('.datepicker-year-content-js'); });
          $('.datepicker-hour-js').on('click', function() { scroll('.datepicker-hour-content-js'); });
          $('.datepicker-minute-js').on('click', function() { scroll('.datepicker-minute-content-js'); });
          $('.datepicker-cancel-js').on('click', scope.onCancel);
          $('.datepicker-ok-js').on('click', scope.onDone);
        };

        scope.onCancel = function() {
          controller.onCancel();
          scope.modal.remove();
        };

        scope.onDone = function() {
          controller.onDone();
          scope.modal.remove();
        };

        scope.onDirectiveClick = function() {

          $ionicModal
          .fromTemplateUrl('datetime-template.html', { scope: scope, hideDelay: 1 })
          .then(scope.show);
        };

        element.on('click', scope.onDirectiveClick);
      }
    };
  }]);
})();

(function() {

  'use strict';

  angular
  .module('ionic-datetimepicker')
  .service('DateTimePickerNls', function () {

    var nls = {
      'en-us': {
        weekdays: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
        months: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
      },
      'pt-br': {
        weekdays: [ 'Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado' ],
        months: [ 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]
      }
    };

    this.getWeekdays = function(locale) {
      return this._getNls(locale).weekdays;
    };

    this.getMonths = function(locale) {
      return this._getNls(locale).months;
    };

    this._getNls = function(locale) {
      return nls[locale] || nls['en-us'];
    };

  });

})();

(function() {

  'use strict';

  angular.module('ionic-datetimepicker')
	  .service('DateTimePickerService', [ 'DateTimePickerNls', function (DateTimePickerNls) {

    var locale = window.navigator.userLanguage || window.navigator.language;
    locale = locale.toLowerCase();

    this.getDaysOfWeek = function() {
      return DateTimePickerNls.getWeekdays(locale);
    };

    this.getMonths = function() {
      return DateTimePickerNls.getMonths(locale);
    };

    this.getYears = function() {
      var years = [];
      for (var i = 1900; i < 2101; i++) years.push(i);
      return years;
    };

    this.getHours = function() {
      var hours = [];
      for (var i = 0; i < 24; i++) hours.push((i < 10) ? '0' + i.toString() : i.toString() );
      return hours;
    };

    this.getMinutes = function() {
      var minutes = [];
      for (var i = 0; i < 60; i++) minutes.push((i < 10) ? '0' + i.toString() : i.toString() );
      return minutes;
    };

    this.createDateList = function(currentDate) {

      var firstDay  = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDate()
        , lastDay   = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
        , dateList  = [];

      for (var i = firstDay; i <= lastDay; i++) {
        dateList.push(new Date(currentDate.getFullYear(), currentDate.getMonth(), i));
      }

      firstDay = dateList[0].getDay();
      for (var j = 0; j < firstDay; j++) {
        dateList.unshift(undefined);
      }
      return dateList;
    };
  }]);
})();

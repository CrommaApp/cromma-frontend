export type News = {
	sfty_notice_id: string;
	title: string;
	wrt_dt: string;
	txt_origin_cn: string;
};

export type NewsInfo = {
	continent_cd: null | string;
	continent_eng_nm: null | string;
	continent_nm: null | string;
	country_eng_nm: null | string;
	country_iso_alp2: null | string;
	country_nm: string;
	file_cnt: null | number;
	file_download_url: string;
	file_path: null | string;
	html_origin_cn: string;
	sfty_notice_id: string;
	title: string;
	txt_origin_cn: string;
	wrt_dt: string;
};

export type NewsData = {
	numOfRows: number;
	pageNo: number;
	resultCode: number;
	resultMsg: string;
	totalCount: number;
	data: NewsInfo[];
};
